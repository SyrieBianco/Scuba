class CreateRoutes < ActiveRecord::Migration[5.0]
  def change
    create_table :routes do |t|
      t.integer :user_id, null:false
      t.string :name, null: false
      t.string :routePath, null: false
      t.text :waypoints_text, null: false
      t.float :distance, null: false
      t.text :notes
      t.timestamps
    end
    add_index :routes, :user_id
    add_index :routes, :name, unique: true
  end
end
