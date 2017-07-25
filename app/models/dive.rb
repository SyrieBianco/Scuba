class Dive < ApplicationRecord
  validates :user, :start_time, :end_time, presence: true
  validate :no_future_dives

  belongs_to :user

# belongs_to :route
# has_many :elevations

  def duration
    difference = self.end_time - self.start_time

    minutes = difference / 60
    seconds = difference - minutes * 60

    hours = minutes / 60
    minutes = minutes - hours * 60

    hr_string, min_string, sec_string = hours.to_s, minutes.to_s, seconds.to_s

    hr_string = "0" + hr_string if hours < 10
    min_string = "0" + min_string if minutes < 10
    sec_string = "0" + sec_string if seconds < 10

    "#{hr_string}:#{min_string}:#{sec_string}"
  end

  private

  def no_future_dives

  end

end
