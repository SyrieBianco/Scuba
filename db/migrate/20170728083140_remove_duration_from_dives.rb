class RemoveDurationFromDives < ActiveRecord::Migration[5.0]
  def change
    remove_column :dives, :duration, :string
  end
end
