class Dive < ApplicationRecord
  validates :user, :start_time, :end_time, :duration, :air_consumed, presence: true
  validate :no_future_dives
  validate :valid_start_and_end_pressure

  belongs_to :user

  after_initialize :ensure_duration, :ensure_air_consumed
# belongs_to :route
# has_many :elevations

  def calculate_duration

    difference = self.end_time - self.start_time

    minutes = difference / 60
    seconds = difference - minutes * 60

    hours = minutes / 60
    minutes = minutes - hours * 60

    hr_string, min_string, sec_string = hours.to_s, minutes.to_s, seconds.to_s

    # hr_string = "0" + hr_string if hours < 10
    min_string = "0" + min_string if minutes < 10
    sec_string = "0" + sec_string if seconds < 10

    if hours === 0
      "#{min_string} mins"
    elsif hours === 1
      "#{hr_string}hr #{min_string}mins"
    else
      "#{hr_string}hrs #{min_string}mins"
    end
    
  end

  def ensure_duration
    self.duration = calculate_duration
  end

  def ensure_air_consumed
    self.air_consumed = start_air_pressure - end_air_pressure
  end

  def valid_start_and_end_time
    if start_time > end_time
      errors.add(:start_time, "The start time must be before the end time")
    end
  end

  def no_future_dives
    if start_time > Time.now.to_i || end_time > Time.now.to_i
      errors.add(:start_time,
                 "Dives cannot be logged that start or end in the future")
    end
  end

  def valid_start_and_end_pressure
    if start_air_pressure < end_air_pressure
      errors.add(:start_air_pressure, "The starting air pressure must be greater than the final reading")
    end
  end

end
