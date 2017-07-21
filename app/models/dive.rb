class Dive < ApplicationRecord
  validates :user, :start_time, :end_time, presence: true

belongs_to :user

# belongs_to :route
# has_many :elevations


end
