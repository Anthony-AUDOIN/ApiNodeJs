'use strict';

const Joi = require('joi');
const Encrypt = require('@anthony_audoin/iut-encrypt');

// requête createUser
module.exports = {
    method: 'post',
    path: '/user',
    options: {
        auth: false,
        tags: ['api'],
        validate: {
            payload: Joi.object({
                firstName: Joi.string().required().min(3).example('John').description('Firstname of the user'),
                lastName: Joi.string().required().min(3).example('Doe').description('Lastname of the user'),
                password: Joi.string().required().min(8).example('azertyuiop').description('password of the user'),
                mail: Joi.string().required().min(8).example('anthonyaudoin@gmail.com').description('mail of the user'),
                username: Joi.string().required().example('jojo').description('username of the user')
            })
        }
    },
    handler: async (request, h) => {

        const { userService } = request.services();
        const { mailService } = request.services();

        // Chiffrement du mdp avant l'envoie en BD
        request.payload.password = Encrypt.sha1(request.payload.password);

        await mailService.mailUserCreation(request.payload);

        return userService.create(request.payload);
    }
};
