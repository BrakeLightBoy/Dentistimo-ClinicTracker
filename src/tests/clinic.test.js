    const db = require('./db')
const clinicService = require('../services/clinic')
const Clinic = require('../models/clinic')

const mongoose = require('mongoose')

//Before tests all the tests, creates and connects to a new test DB
beforeAll(async () => await db.connect());
//After each test, clear to database to give each test an empty DB
afterEach(async () => await db.clearDatabase());
//When all tests are done we delete the DB and close the connection to mongodb
afterAll(async () =>  await db.closeDatabase());

describe('clinicTests', () => {

    it('should not find any clinic', done => {
        clinicService.getAllClinics().then(clinics => {
            console.log(clinics)
            expect(clinics).toEqual([]);
            done()
        })
    })
})