const uuid = require('uuid');
const path = require('path');
const { Device } = require('../models/models');
const { nextTick } = require('process');
const ApiError = require('../error/ApiError');
class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, info } = req.body
            const { img } = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', filename))

            const device = await Device.create({ name, price, brandId, typeId, img: filename })
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }
}

module.exports = new DeviceController()