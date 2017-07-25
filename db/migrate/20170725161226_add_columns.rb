class AddColumns < ActiveRecord::Migration[5.0]
  def change
    add_column :dives, :duration, :string
    add_column :dives, :air_consumed, :integer
  end
end
