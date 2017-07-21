class CreateDives < ActiveRecord::Migration[5.0]
  def change
    create_table :dives do |t|
      t.string :title
      t.integer :user_id, null: false
      t.integer :route_id, null: false
      t.integer :elevation_id, null: false
      t.text :notes
      t.integer :start_time, null: false
      t.integer :end_time, null: false
      t.integer :start_air_pressure
      t.integer :end_air_pressure


      t.timestamps
    end

    add_index :dives, :user_id
    add_index :dives, :route_id
    add_index :dives, :elevation_id

  end
end
