class RemoveElevationId < ActiveRecord::Migration[5.0]
  def change
    change_column :dives, :elevation_id, :integer, null: true
  end
end
