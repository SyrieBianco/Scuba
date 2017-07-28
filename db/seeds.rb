# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# user
User.delete_all

demo = User.create!(
  username: "JacquesCousteau",
  password: "password"
)

# routes
Route.delete_all

route1 = Route.create!(user_id: demo.id, name: "Etten Island Atoll", waypoints_text: "gr{k@uh_~[~@XvAv@r@pAXfA\\nBBdBYjB_Az@w@~@CxA`@xAbA...", distance: 1324.16633870604, notes: "Etten Island")
route2 = Route.create!(user_id: demo.id, name: "Light House Reef", waypoints_text: "gqbhBnoruObEwIhKePbCmTeGiRkMmToSoTqU_Nw_@_NsWiCya@...", distance: 16114.1205875342, notes: "Finish at the Great Blue Hole")
route3 = Route.create!(user_id: demo.id, name: "Mama Rhoda", waypoints_text: "otezCdrrzMWxAOdBEdA[t@]lAc@~@m@z@[lAQxAGrBB`BHz@^T...", distance: 1267.93347337401, notes: "Barrier Reef")
route4 = Route.create!(user_id: demo.id, name: "Block Reef", waypoints_text: "lfrwBgsrn[xBeB~A_Cx@qCnBqCxCuA~AgB`B}AvBcApDs@hBuA...", distance: 5222.23622811864, notes: "Great Barrier Reef")
route5 = Route.create!(user_id: demo.id, name: "Lake Weissensee", waypoints_text: "o~c|Gkv}oA`@gAHqAAmCFoB?cCSoBk@}AQkBW_C_@yCJmAPeBl...", distance: 1858.46455693401, notes: "Crystal clear water")
route6 = Route.create!(user_id: demo.id, name: "Sutro Resevoir", waypoints_text: "yrleF|`ljVZL`@JZLd@LXC?]Fe@Pa@G]WCUPC`@Q\\UAQYAc@Bc...", distance: 443.947789772577, notes: "don't, *don't* drink the water!")
route7 = Route.create!(user_id: demo.id, name: "Myrmidon Reef", waypoints_text: "fbonB{`qb[`C`C?~BFlE`@fBxDFbCs@`BYxC?hCj@X~Bf@nBFl...", distance: 4311.58272547768, notes: "Big, beautiful blue whale")
route8 = Route.create!(user_id: demo.id, name: "Pirate Cove", waypoints_text: "cb`fFfiakVNw@^k@TSFg@RcA`@yEt@p@|@\\t@\\`@j@Dv@\\`BVx...", distance: 1383.85977064393, notes: "Wreck", created_at: "2017-07-27 16:36:44")
route9 = Route.create!(user_id: demo.id, name: "Bird Cay Barrier Reef", waypoints_text: "cl_zCty}yM_@eI}@eI}@gJ{CgJ{AuH}A}E|A}DvE`@jD~E?zDz...", distance: 3222.62330574483, notes: "Follow the edge of the reef!")




# dives

Dive.delete_all

Dive.create!(title: "Christmas Maru Fujikawa Dive",
             user_id: demo.id, route_id: route1.id, elevation_id: nil,
             notes: "Beautiful reefs around a spectacular wreck dive site; lots of interesting marine life",
             start_time: 1451062980, end_time: 1451069100,
             start_air_pressure: 2700, end_air_pressure: 1100,
             tank_size: 19)


Dive.create!(title: "Great Blue Hole",
             user_id: demo.id, route_id: route2.id, elevation_id: nil,
             notes: "Awesome cave dive! The great blue hole *blue* my mind. lolz. The internal cave structure was so stunning! Can't wait to go back. Perfect Conditions; clear skies, clear waters.",
             start_time: 1430690400, end_time: 1430697720,
             start_air_pressure: 2210, end_air_pressure: 915,
             tank_size: 30)


Dive.create!(title: "Morning Dive at South Stirrup Cave",
             user_id: demo.id, route_id: route3.id, elevation_id: nil,
             notes: "Saw a giant manta ray leap out of the water! Counted 13 different types of coral. A school of jackfish swam through.",
             start_time: 1438616580, end_time: 1438621800,
             start_air_pressure: 3000, end_air_pressure: 1200,
             tank_size: 40)


Dive.create!(title: "Bioluminescent Night Dive",
             user_id: demo.id, route_id: route9.id, elevation_id: nil,
             notes: "Witnessed a bioluminescent algae tide, and when the waves agitated the water they would light up! It was a surreal experience. Extraordinary night-dive conditions.",
             start_time: 1438662300, end_time: 1438665780,
             start_air_pressure: 3000, end_air_pressure: 2010,
             tank_size: 48)


Dive.create!(title: "Chub Cay Trip Day 4",
             user_id: demo.id, route_id: route3.id, elevation_id: nil,
             notes: "Last dive of the trip! Saw an octopus and a brightly colored fish I couldn't identify -- looked like a relative of the parrot fish family, though.",
             start_time: 1438812060, end_time: 1438818060,
             start_air_pressure: 2900, end_air_pressure: 1500,
             tank_size: 48)
