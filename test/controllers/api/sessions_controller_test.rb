require 'test_helper'

class Api::SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_sessions_create_url
    assert_response :success
  end

  test "should get destry" do
    get api_sessions_destry_url
    assert_response :success
  end

end
