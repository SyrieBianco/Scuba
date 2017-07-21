class CreateElevations < ActiveRecord::Migration[5.0]
  def change
    create_table :elevations do |t|
      t.integer :dive_id, null: false
      t.integer :depth, null: false
      t.integer :time, null: false
      t.timestamps
    end

    add_index :elevations, :dive_id
  end
end
