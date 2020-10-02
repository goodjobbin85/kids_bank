# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Student.delete_all

Student.create!(
  name: "paul",
  email: "paul@gmail.com",
  balance: 100.00,
  allowance: 15.00
)

Student.create!(
  name: "natalie",
  email: "natalie@gmail.com",
  balance: 100.00,
  allowance: 12.00
)

Student.create!(
  name: "katherine",
  email: "katherine@gmail.com",
  balance: 100.00,
  allowance: 10.00
)
