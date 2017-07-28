class AddTankSizeToDive < ActiveRecord::Migration[5.0]
  def change
    add_column :dives, :duration_string, :string
    add_column :dives, :duration_seconds, :integer
    add_column :dives, :tank_size, :integer
  end
end
