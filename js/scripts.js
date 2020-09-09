$(document).ready(function(){
    function Booking(branch,type,services,duration){
        this.branch = branch;
        this.type = type;
        this.services = services;
        this.duration = duration;
    }
    Booking.prototype.finalFee = function (){
        return this.getServicesFee() + this.getDurationFee()
    };
    Booking.prototype.getServicesFee = function(){
        if(this.type === "Heavy"){
            if(this.services === "Engine service"){
                return 5000;
            }else if(this.services === "Power System"){
                return 3000;
            }else if(this.services === "Oil services"){
                return 3500;
            }else if(this.services === "Parking"){
                return 600;
            }else{
                return 800;
            }
        }else 
    }
})