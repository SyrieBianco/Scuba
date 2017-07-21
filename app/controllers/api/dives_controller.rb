class Api::DivesController < ApplicationController
  before_action :require_logged_in

  def create
    @dive = Dive.new(dive_params)
    @dive.user_id = current_user.id

    if @dive.save
      render "api/dives/show"
    else
      render json: @dive.errors.full_messages, status: 422
    end
  end

  def index
    @dives = Dive.where(user_id: current_user.id)
    render "/api/dives/index"
  end

  def show
    @dive = Dive.find(params[:id])
    render "api/dives/show"
  end

  def destroy
    @dive = Dive.find(params[:id])
    if @dive.destroy
      render "/api/dives/index"
    else
      render json: @dive.errors.full_messages, status: 422
    end
  end

  private

  def dive_params
    params.require(:dive).permit(
      :title,
      :route_id,
      :notes,
      :distance,
      :elevation_id,
      :start_time,
      :end_time,
      :date,
      :start_air_pressure,
      :end_air_pressure
    )
  end
  
end
