class Route < ApplicationRecord
  validates :distance, :name, :waypoints_text, presence: true;
  validates :name, uniqueness: true

  has_many :dives
  belongs_to :user
end
