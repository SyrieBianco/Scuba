class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )

    if @user
      login(@user)
      render "api/sessions/show"
    else
      render(json: ["Invalid login credentials."], status: 401)
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/session"
    else
      render(json: ["Invalid login credentials."], status: 401)
    end
  end
end
