const express = require("express");
const { Vehicle, Booking } = require("../../db");
const { Op } = require("sequelize");
const sequelize = require("sequelize");

const getMostRequiredBrandsHandler = async (req, res) => {
  try {
    // Consulta la base de datos para obtener todas las marcas de vehículos
    const vehicleBrands = await Vehicle.findAll({
      attributes: ["brand"],
    });

    // Consulta la base de datos para contar cuántas veces se ha alquilado cada marca de vehículo
    const brandCounts = await Booking.findAll({
      attributes: [
        "VehicleId",
        [sequelize.fn("count", sequelize.col("VehicleId")), "count"],
      ],
      where: {
        stateBooking: "completed", // Solo considera las reservas completadas
      },
      group: ["VehicleId"],
    });

    // Crea un objeto para almacenar el recuento de alquileres por marca
    const brandRentCounts = {};

    // Llena el objeto con los recuentos de alquileres
    brandCounts.forEach((count) => {
      brandRentCounts[count.VehicleId] = count.get("count");
    });

    // Mapea las marcas de vehículos y agrega el recuento de alquileres
    const brandsWithCounts = vehicleBrands.map((brand) => ({
      brand: brand.brand,
      rentCount: brandRentCounts[brand.id] || 0, // Si no hay recuento, establece en 0
    }));

    // Ordena las marcas por la cantidad de alquileres en orden descendente
    const sortedBrands = brandsWithCounts.sort(
      (a, b) => b.rentCount - a.rentCount
    );

    return sortedBrands;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving brand information." });
  }
};

module.exports = getMostRequiredBrandsHandler;
