class Dive < ApplicationRecord
  validates :user, :start_time, :end_time, presence: true
  validate :no_future_dives

  belongs_to :user

  helper_method :duration, :air_consumed

# belongs_to :route
# has_many :elevations

  def end_time=(end_time)
    difference = self.end_time - self.start_time

    minutes = difference / 60
    seconds = difference - minutes * 60

    hours = minutes / 60
    minutes = minutes - hours * 60

    hr_string, min_string, sec_string = hours.to_s, minutes.to_s, seconds.to_s

    hr_string = "0" + hr_string if hours < 10
    min_string = "0" + min_string if minutes < 10
    sec_string = "0" + sec_string if seconds < 10

    self.duration = "#{hr_string}:#{min_string}:#{sec_string}"
  end

  def end_air_pressure=(end_air_pressure)
    self.air_consumed = end_air_pressure - start_air_pressure
  end

  private

  def valid_start_and_end_time
    if start_time > end_time
      errors.add(:start_time, "The start time must be before the end time")
    end
  end

  def no_future_dives
    if start_time > Time.now || end_time > Time.now
      errors.add(:start_time,
                 "Dives cannot be logged that start or end in the future")
    end
  end


end
