$(document).ready(function () {
    function Booking(name, email, phone, id, regNo, branch, type, services, duration) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.id = id;
        this.regNo = regNo;
        this.branch = branch;
        this.type = type;
        this.services = services;
        this.duration = duration;
    }
    var servicesOrdered = [];
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
            };
        } else {
            if (this.duration === "Urgently") {
                return 800;
            } else if (this.duration === "Late") {
                return 1200;
            } else {
                return 0;
            };
        };
    };
    $("#userInput").submit(function (e) {
        e.preventDefault();
        var userName = $("#fname").val();
        var userEmail = $("#email").val();
        var userPhone = $("#fphone").val();
        var userId = $("#fid").val();
        var userRegNo = $("#fnumber").val();
        var userBranch = $("#branch").val();
        var userType = $("#type").val();
        var userService = $("#services").val();
        var userDuration = $("#duration").val();
        var newBooking = new Booking(userName, userEmail, userPhone, userId, userRegNo, userBranch, userType, userService, userDuration)
        console.log(newBooking)

        servicesOrdered.push(newBooking);
        $("#fname").val("");
        $("#email").val("");
        $("#fphone").val("");
        $("#fid").val("");
        $("#fnumber").val("");
        $("#branch").val("");
        $("#type").val("");
        $("#services").val("");
        $("#duration").val("");


        $("#booking-summary").append(
            "<tr>" +
            '<th scope="row">' +
            newBooking.name +
            "</th>" +
            "<td>" +
            newBooking.email +
            "</td>" +
            "<td>" +
            newBooking.phone +
            "</td>" +
            "<td>" +
            newBooking.id +
            "</td>" +
            "<td>" +
            newBooking.regNo +
            "</td>" +
            "<td>" +
            newBooking.branch +
            "</td>" +
            "<td>" +
            newBooking.type +
            "</td>" +
            "<td>" +
            newBooking.services +
            " - " +
            newBooking.getServicesFee() +
            "</td>" +
            "<td>" +
            newBooking.duration +
            " - " +
            newBooking.getDurationFee() +
            "</td>" +
            "<td>" +
            newBooking.finalFee() +
            "</td>" +
            "</tr>"
        );




    });





});