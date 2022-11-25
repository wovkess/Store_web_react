import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Fridges' },
            { id: 2, name: 'Headphones' },
        ]
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Nokia' },

        ]
        this._devices = [
            { id: 1, name: 'temp' },
            { id: 2, name: 'aaa' },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._selectedDevice = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    setSelectedDevice(device) {
        this._selectedDevice = device
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get selectedDevice() {
        return this._selectedDevice
    }


}