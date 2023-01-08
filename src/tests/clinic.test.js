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

    it('should successfully get all clinics', done => {
        Clinic.create({
            name: "test-clinic",
            owner: "test-owner",
            address: "Spannmålsgatan 20",
            city: "Gothenburg",
            coordinate: {
              longitude: 11.969388,
              latitude: 57.707619
            },
            opening_hours: {
              monday: "9:00-17:00",
              tuesday: "8:00-17:00",
              wednesday: "7:00-16:00",
              thursday: "9:00-17:00",
              friday: "9:00-15:00",
            }}).then(clinic1 => {
                Clinic.create({
                    name: "test-clinic2",
                    owner: "test-owner2",
                    address: "Spannmålsgatan 202",
                    city: "Gothenburg2",
                    coordinate: {
                      longitude: 17.969388,
                      latitude: 35.707619
                    },
                    opening_hours: {
                      monday: "9:00-17:00",
                      tuesday: "8:00-17:00",
                      wednesday: "7:00-16:00",
                      thursday: "9:00-17:00",
                      friday: "9:00-15:00",
                    }}).then(clinic2 => {
                        expect(clinic1.name).toEqual('test-clinic')
                        expect(clinic1.owner).toEqual('test-owner')
                        expect(clinic1.address).toEqual('Spannmålsgatan 20')
                        expect(clinic1.city).toEqual('Gothenburg')
                        expect(clinic1.coordinate.longitude).toEqual(11.969388)
                        expect(clinic1.coordinate.latitude).toEqual(57.707619)
                        expect(clinic1.opening_hours.monday).toEqual("9:00-17:00")
                        expect(clinic1.opening_hours.tuesday).toEqual("8:00-17:00")
                        expect(clinic1.opening_hours.wednesday).toEqual("7:00-16:00")
                        expect(clinic1.opening_hours.thursday).toEqual("9:00-17:00")
                        expect(clinic1.opening_hours.friday).toEqual("9:00-15:00")
    
                        expect(clinic2.name).toEqual('test-clinic2')
                        expect(clinic2.owner).toEqual('test-owner2')
                        expect(clinic2.address).toEqual('Spannmålsgatan 202')
                        expect(clinic2.city).toEqual('Gothenburg2')
                        expect(clinic2.coordinate.longitude).toEqual(17.969388)
                        expect(clinic2.coordinate.latitude).toEqual(35.707619)
                        expect(clinic2.opening_hours.monday).toEqual("9:00-17:00")
                        expect(clinic2.opening_hours.tuesday).toEqual("8:00-17:00")
                        expect(clinic2.opening_hours.wednesday).toEqual("7:00-16:00")
                        expect(clinic2.opening_hours.thursday).toEqual("9:00-17:00")
                        expect(clinic2.opening_hours.friday).toEqual("9:00-15:00")
                        done()
                     })
            })
    })
    
})
