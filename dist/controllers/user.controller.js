"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const schemas_1 = require("@/models/schemas");
const user_interface_1 = require("@/interfaces/user.interface");
class UserController extends user_interface_1.UserController {
    async create(req, res) {
        const { phoneNumber, idNumber } = req.body;
        try {
            let user = await schemas_1.User.findOne({
                phoneNumber,
            });
            if (user) {
                res.status(403).json({
                    message: 'phone number already registered for another account',
                });
                return;
            }
            user = await schemas_1.User.findOne({
                idNumber,
            });
            if (user) {
                res.status(403).json({
                    message: 'ID number already registered for another account',
                });
                return;
            }
            const newUser = new schemas_1.User(req.body);
            const savedUser = await newUser.save();
            const token = jsonwebtoken_1.default.sign({
                id: savedUser._id,
            }, process.env.TOKEN_SECRET_KEY);
            res.status(201).json({
                user: savedUser,
                token,
            });
            return;
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    }
    async update(req, res) {
        const { phoneNumber, idNumber } = req.body;
        try {
            let user = await schemas_1.User.findOne({ phoneNumber });
            if (user && user._id.toString() !== req.params.id) {
                res.status(403).json({
                    message: 'phone number is already registered for another account!',
                    statusText: 'ERROR',
                });
                return;
            }
            user = await schemas_1.User.findOne({ idNumber });
            if (user && user._id.toString() !== req.params.id) {
                res.status(403).json({
                    message: 'ID number is already registered for another account!',
                    statusText: 'ERROR',
                });
                return;
            }
            const updateUser = await schemas_1.User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json({
                message: 'successfully update user',
                updated_user: updateUser,
            });
            return;
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            await schemas_1.UserVaccine.deleteMany({ user: id });
            await schemas_1.UserPlace.deleteMany({ user: id });
            await schemas_1.User.findByIdAndDelete(id);
            res.status(200).json({ message: 'deleted successfully!' });
            return;
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async getSingleUser(req, res) {
        try {
            const user = (await schemas_1.User.findById(req.params.id));
            const userVaccine = await schemas_1.UserVaccine.find({
                user: req.params.id,
            })
                .populate('vaccine')
                .populate('vaccineLot')
                .sort('-createdAt');
            const userPlaceVisit = await schemas_1.UserPlace.find({
                user: req.params.id,
            })
                .populate('place')
                .sort('-createdAt');
            user._doc.vaccinated = userVaccine;
            user._doc.placeVisited = userPlaceVisit;
            res.status(201).json({ message: 'send user data successful', user });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async getAllUser(_req, res) {
        try {
            const list = await schemas_1.User.find({}).sort('-createdAt');
            for (const user of list) {
                const vaccine = await schemas_1.UserVaccine.find({
                    user: user._id,
                }).sort('-createdAt');
                user._doc.vaccine = vaccine;
            }
            res
                .status(200)
                .json({ message: 'success getting all user', lists: list });
            return;
        }
        catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }
    async vaccinated(req, res) {
        try {
            const { userId, vaccineId, vaccineLotId } = req.body;
            const newVaccine = new schemas_1.UserVaccine({
                user: userId,
                vaccine: vaccineId,
                vaccineLot: vaccineLotId,
            });
            const savedUserVaccine = await newVaccine.save();
            await schemas_1.VaccineLot.findOneAndUpdate({
                _id: vaccineLotId,
            }, {
                $inc: {
                    vaccinated: +1,
                },
            });
            savedUserVaccine._doc.vaccine = await schemas_1.Vaccine.findById(vaccineId);
            savedUserVaccine._doc.vaccineLot = await schemas_1.VaccineLot.findById(vaccineLotId);
            res.status(200).json({
                message: 'successfully updated user, vaccination updated!',
                savedUserVaccine,
            });
            return;
        }
        catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }
    async getAllPlace(req, res) {
        try {
            const listPlace = await schemas_1.Place.find({
                creator: req.params.userId,
            });
            res.status(200).json({
                message: 'get list of all vaccination place successfully',
                lists: listPlace,
            });
            return;
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async checkinPlace(req, res) {
        var _a;
        try {
            const newVisitVaccination = new schemas_1.UserPlace({
                user: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a._id,
                place: req.body.placeId,
            });
            const savedUserPlace = await newVisitVaccination.save();
            res.status(201).json({
                message: 'checked in for vaccination completed!',
                user_data: savedUserPlace,
            });
            return;
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async placeVisited(req, res) {
        try {
            const listVisitedPlace = await schemas_1.UserPlace.find({
                user: req.params.userId,
            }).populate('place');
            res.status(200).json({
                message: 'listing of visited place',
                visited_places: listVisitedPlace,
            });
            return;
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
exports.userController = new UserController();
//# sourceMappingURL=user.controller.js.map