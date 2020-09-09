$(document).ready(function () {
    function Booking(branch, type, services, duration) {
        this.branch = branch;
        this.type = type;
        this.services = services;
        this.duration = duration;
    }
    Booking.prototype.finalFee = function () {
        return this.getServicesFee() + this.getDurationFee()
    };
    Booking.prototype.getServicesFee = function () {
        if (this.type === "Medium") {
            if (this.services === "Engine service") {
                return 3000;
            } else if (this.services === "Power System") {
                return 2500;
            } else if (this.services === "Oil services") {
                return 3000;
            } else if (this.services === "Parking") {
                return 500;
            } else {
                return 600;
            };
        } else {
            if (this.services === "Engine service") {
                return 2000;
            } else if (this.services === "Power System") {
                return 1500;
            } else if (this.services === "Oil services") {
                return 2500;
            } else if (this.services === "Parking") {
                return 300;
            } else {
                return 300;
            };
        };
    };
    Booking.prototype.getDurationFee = function () {
        if (this.type === "Heavy") {
            if (this.duration === "Urgently") {
                return 1000;
            } else if (this.duration === "Late") {
                return 3000;
            } else {
                return 0;
            }
        } else if (this.type === "Medium") {
            if (this.duration === "Urgently") {
                return 1000;
            } else if (this.duration === "Late") {
                return 1500;
            } else {
                return 0;
            }
        } else {
            if (this.duration === "Urgently") {
                return 800;
            } else if (this.duration === "Late") {
                return 1200;
            } else {
                return 0;
            }
        }
    }
});