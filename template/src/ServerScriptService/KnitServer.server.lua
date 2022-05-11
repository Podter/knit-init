local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Knit = require(ReplicatedStorage.Packages.Knit)

Knit.Start():andThen(function()
    print("Knit server started")
end):catch(warn)
