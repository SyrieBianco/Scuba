*Component Hierarchy*

AuthFormContainer
- AuthForm

WelcomeContainer
- Welcome

AppContainer
- NavBar

DashboardContainer
- Profile
- Stats
- Dives
- DiveRoutes

DiveIndexContainer
- DiveIndexItem
- DiveItemDetail

DiveRouteIndexContainer
- DiveRouteIndexItem
- DiveRouteItemDetail

ProfileContainer
- Profile

StatsContainer
- Stats

NewDiveContainer
- NewDive

NewDiveRouteContainer
- NewDiveRoute



Routes

Path	                                Component

"/landing"	                      "WelcomeContainer"
"/sign-up"	                      "AuthFormContainer"
"/sign-in"	                      "AuthFormContainer"
bonus: "/onBoarding"              "OnBoardingContainer"
"/dashboard"                      "DashboardContainer"
"/dives"	                        "DiveIndexContainer"
"/dives/:diveId"	                "DiveShowContainer"
"/routes"	                        "DiveRoutesIndexContainer"
"/routes/:routeId"	              "DiveRouteItemDetail"
"/stats"	                        "StatsContainer"
"/profile"	                      "ProfileContainer"
"/new-route"	                    "NewDiveRouteContainer"
"/new-dive"	                      "NewDiveContainer"
