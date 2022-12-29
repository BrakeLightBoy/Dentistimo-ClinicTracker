const Clinic = require('../models/clinic')

// Retrieve all clinics
const getAllClinics = async () => {
    const clinics = await Clinic.find();
    
    if(clinics){     
        return clinics;

    } else {
        return Promise.reject('No clinics found')
    }
}

module.exports = {
    getAllClinics
}
