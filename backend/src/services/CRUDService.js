import bcrypt from 'bcryptjs';
import db from '../models/index';
import { raw } from 'body-parser';



const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise( async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                full_name: data.full_name,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId
            })
            resolve('ok! create a new user succeed!');


        } catch (e) {
            reject(e);
        }
    })
    
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
        
// Store hash in your password DB.
    })
}

let getAllUser = () => {
    return new Promise( async (resolve, reject) => {
try {
    let users = await db.User.findAll({
        raw: true, //raw ở đây là dữ liệu gốc
    });
    resolve(users);
} catch (e) {
    reject(e);
}
    })
}

let getUserInfoById = (userId) => {
return new Promise(async(resolve, reject) => {
    try {
        let user = await db.User.findOne({
            where: { id: userId },
            raw: true,
        })
        if(user){
            resolve(user)
        }
        else{
            resolve([])
        }
    } catch (e) {
        reject(e);
    }
})
}

let updateUserData = (data) => {
console.log('data from service')
console.log(data)
return new Promise(async(resolve, reject) => {
    try {
        let user = await db.User.findOne({
            where: { id: data.id }
        })
        if(user){
            user.full_name = data.full_name;
           
            user.address = data.address;

            await user.save();

            let allUsers = await db.User.findAll();
            resolve(allUsers);
        }else{
            resolve();
        }
       
    } catch (e) {
        console.log(e);
    }
})
}

let deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {id: userId} //x <-- y
            })

            if(user){
                await user.destroy();
            }

            resolve();
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
    deleteUserById: deleteUserById,
}