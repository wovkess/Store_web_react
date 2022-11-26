import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Flowers' },
            { id: 2, name: 'Decorations' },
            { id: 3, name: 'Postcards' },
        ]
        this._brands = [
            { id: 1, name: 'Romantic' },
            { id: 2, name: 'Thematic' },
            { id: 3, name: 'Custom options' },

        ]
        this._devices = [
            { id: 1, name: 'temp', priсe:100, rating: 5, img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2520flowers%2F&psig=AOvVaw3GR6FIeR59FR8qitJpkUXA&ust=1669496908495000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJjfqeGeyvsCFQAAAAAdAAAAABAE` },
            { id: 2, name: 'aaa', priсe:100, rating: 5, img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2520flowers%2F&psig=AOvVaw3GR6FIeR59FR8qitJpkUXA&ust=1669496908495000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJjfqeGeyvsCFQAAAAAdAAAAABAE` },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
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
    // setSelectedDevice(device) {
    //     this._selectedDevice = device
    // }
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
    // get selectedDevice() {
    //     return this._selectedDevice
    // }
}