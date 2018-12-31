// Returns the GPI (Gross Potential Income) for the following
//
// @params
// housing_array shold contain objects with the following criteria
// [ {number_of_units, rent_per_unit}, {...} ]
//
// Example:
// [ {number_of_units: 2, rent_per_unit: 550}, {number_of_units: 1, rent_per_unit: 700} ]
exports.calculate_gpi = function(housing_arr) {
    var total_gpi = 0;
    for(var i = 0; i < housing_arr.length; i++)
    {   
        units_hash = housing_arr[i];
        total_gpi += units_hash.number_of_units * units_hash.rent_per_unit;
    }
    return total_gpi;
}

// Returns the VAC (Less vacancy & Collection loss)
//
// @params
// gpi -> A (number) with the GPI (Gross Potential Income)
exports.calculate_vac = function(gpi) {
    return gpi * 0.05;
}

// Calculates the Effective Gross Income
//
// @params
// gpi -> A (number) with the GPI
// vac -> A (number) with the VAC calculated
exports.calculate_egi = function(gpi, vac) {
    return gpi - vac;
}

exports.calculate_all_variables = function(housing_arr) {
    return "calculating all variables";
}