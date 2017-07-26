class RemoveRoutePathFromRoutes < ActiveRecord::Migration[5.0]
  def change
    remove_column :routes, :routePath
  end
end
