json.array!(@dives) do |dive|
  json.partial!('api/dives/dive', dive: dive)
end
