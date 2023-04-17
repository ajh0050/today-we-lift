const workouts = [
    {
        "title": "Bread & Butter",
        "body_part": "chest",
        "exercises": [
            {
                "name": "Decline Bench Press",
                "reps": [12, 10, 8, 6, 8, 10, 12, 20],
                "notes": "Increasing weight until 6 reps, then back down in weight."
            },
            {
                "name": "Incline Dumbbell Press",
                "reps": [8, 8, 8, 8],
                "notes": "Increasing weight with each set. If you fail to reach reps, pause and continue."
            },
            {
                "name": "Flat Dumbbell Flyes",
                "reps": [10, 10, 10, 10],
                "notes": "Increasing weight with each set. If you fail to reach reps, pause and continue."
            },
            {
                "name": "Smith Machine Press",
                "reps": "to failure",
                "sets": 4,
                "notes": "Moderate weight, reps should be between 12-20."
            },
            {
                "name": "Cable Flyes",
                "reps": "150 total reps",
                "notes": "Moderate weight, take as many sets as you need to hit the target reps."
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Building Blocks",
        "body_part": "chest",
        "exercises": [
            {
                "name": "Flat Bench Press",
                "reps": [20, 15, 12, 10, 8, 6],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Incline Bench Press",
                "reps": [20, 15, 12, 10, 8, 6],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Decline Bench Press",
                "reps": [20, 15, 12, 10, 8, 6],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Dumbbell Pullovers",
                "reps": [10,10],
                "sets": 3,
                "notes": "Get 10 reps with heavier weight, drop weight and get 10 more reps. Repeat 3 times."
            },
            {
                "name": "Push Ups",
                "reps": "150 total reps",
                "notes": "Keep form intact throughout and do as many sets as it takes."
            }
        ],
        "workout_notes": ""
    },

    {
        "title": "Battle Royale",
        "body_part": "chest",
        "exercises": [
            {
                "name": "Body Weight Bench Press",
                "reps": "60 total reps",
                "notes": "Perform one warm up set. Then put your body weight on the bar and get 60 total reps."
            },
            {
                "name": "Incline Dumbbell Press",
                "reps": [20, 20, 20, 20],
                "notes": "Use a moderate weight and keep it the same throughout. Focus on feel and form."
            },
            {
                "name": "Decline Dumbbell Pullovers",
                "reps": [10, 10, 10],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Decline Dumbbell Flyes",
                "reps": [10, 10, 10],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Pec Deck",
                "reps": [12, 12, 12, 12],
                "notes": "Increasing weight with each set."
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Iron Blizzard",
        "body_part": "chest",
        "exercises": [
            {
                "name": "Incline Bench Press",
                "reps": [20, 12, 10, 8, 6, 4, 4, 4],
                "notes": "Take this one to the max! Increasing weight until 4 reps, then 3 sets at 4 reps."
            },
            {
                "name": "Incline Cable Flyes",
                "reps": [15, 12, 10, 8],
                "notes": "Use the lower setting on cables and flye weight upward for 4 sets, increasing weight."
            },
            {
                "name": "Flat Dumbbell Press",
                "reps": [10, 10, 10],
                "sets": 3,
                "notes": "Do these as a dropset. Start heavy and drop twice for one set. Repeat for 3 sets."
            },
            {
                "name": "Weighted Dips",
                "reps": "60 total reps",
                "notes": "Add weight and get 60 total reps. If you cannot add weight, do without."
            },
            {
                "name": "Pec Deck",
                "reps": "100 total reps",
                "notes": "Dig deep. Use a lighter weight and focus on form. Take as many sets as needed."
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Hoorah",
        "body_part": "chest",
        "exercises": [
            {
                "name": "Decline Dumbbell Press",
                "reps": [12, 10, 8, 6],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Push Ups",
                "reps": "to failure",
                "sets": 4,
                "notes": "",
            },
            {
                "name": "Hammer Strength Flat Press",
                "reps": [12, 10, 8, 6],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Push Ups",
                "reps": "to failure",
                "sets": 4,
                "notes": "",
            },
            {
                "name": "Dumbbell Incline Flyes",
                "reps": [12, 10, 8, 6],
                "notes": "Increasing weight with each set. Focus on a deep stretch."
            },
            {
                "name": "Push Ups",
                "reps": "to failure",
                "sets": 4,
                "notes": "",
            },
            {
                "name": "Decline Cable Flyes",
                "reps": [20, 20, 20, 20],
                "notes": "Increasing weight with each set."
            }
        ],
        "workout_notes": ""
    },

    {
        "title": "Good Luck",
        "body_part": "chest",
        "exercises": [
            {
                "name": "Flat Dumbbell Press (Pyramid)",
                "reps": [10, 10, 10, 10],
                "sets": 3,
                "notes": "Start with a light weight and get 10, increase to moderate weight get 10, go heavy get 10, then drop down to the initial weight and get a final 10. Repeat 3 times."
            },
            {
                "name": "Decline Dumbbell Flyes",
                "reps": [10, 20, 30],
                "notes": "Start with heavier weight and decrease with each set. Get target reps."
            },
            {
                "name": "Incline Cable Flyes (Bench)",
                "reps": [15, 15, 15],
                "notes": "Bring an incline bench to the cables and set it up between the two. Set cables down low and fly. Increasing weight."
            },
            {
                "name": "Bodyweight Dips",
                "reps": "100 total reps",
                "notes": "Using just your body weight, get as many as you can, pause and repeat to 100 total reps."
            },
            {
                "name": "Smith Machine Flat Press",
                "reps": "to failure",
                "sets": 3,
                "notes": "Use a lighter weight and get 3 sets to failure. Failure is when you cannot move the bar, hence we are doing this on a smith in case you do not have a spot."
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Grow!",
        "body_part": "chest",
        "exercises": [
            {
                "name": "Pushups",
                "reps": "150 total reps",
                "notes": "Right out of the gate, lets hit the floor and get some pushups!"
            },
            {
                "name": "Wide-Grip Bench Press",
                "reps": [15, 12, 10, 8, 6, 4],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Dips",
                "reps": "100 total reps",
                "notes": "Using your bodyweight, get 100 total reps."
            },
            {
                "name": "Decline Dumbbell Pullovers",
                "reps": [15, 15, 15],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Pec Deck",
                "reps": "50 total reps",
                "notes": "Moderate weight, focus on the squeeze and feel of the movements. 50 total reps."
            }
        ],
        "workout_notes": ""
    },

    {
        "title": "All Day",
        "body_part": "chest",
        "exercises": [
            {
                "name": "Weighted Dips",
                "reps": [20, 20],
                "sets": 4,
                "notes": "Start with weight for 20 reps, then drop the weight and get 20 more reps. Repeat 3 times."
            },
            {
                "name": "Decline Bench Press",
                "reps": [8, 10, 12, 15, 20],
                "notes": "Start with heavier weight and decrease weight with each set."
            },
            {
                "name": "Hammer Strength Flat Press",
                "reps": "50 total reps",
                "notes": "Do as many sets as you can.",
            },
            {
                "name": "Pec Deck",
                "reps": "50 total reps",
                "notes": "Do as many sets as you can.",
            },
            {
                "name": "Smith Machine Incline Press",
                "reps": "to failure",
                "sets": 3,
                "notes": "Use a lighter weight and get 3 sets to failure. Failure is when you cannot move the bar, hence we are doing this on a smith in case you do not have a spot."
            }
        ],
        "workout_notes": ""
    }
    ,
    {
        "title": "Against the Grain",
        "body_part": "chest",
        "exercises": [
            {
                "name": "Reverse Grip Bench Press",
                "reps": [15, 12, 10, 8],
                "notes": "Grip the bar palms facing you and execute a bench press. Increasing weight."
            },
            {
                "name": "Decline Pushups",
                "reps": "100 total reps",
                "notes": "Put feet up on flat bench and execute a pushup. 100 total reps."
            },
            {
                "name": "Single Dumbbell Chest Press",
                "reps": [12, 12, 12, 12],
                "notes": "Grab a moderate weight dumbbell and lie on a flat bench. Grab the dumbbell with one hand on each side and hold it above your chest. Slowly lower the dumbbell to your chest pushing in on both sides to hold it. Press the dumbbell back up, all the while pushing in on both sides.",
            },
            {
                "name": "Stability Ball Dumbbell Flyes",
                "reps": [15, 15, 15, 15],
                "notes": "Chest flyes using a stability instead of a bench. ",
            },
            {
                "name": "Stability Ball Dumbbell Pullovers",
                "reps": [15, 12, 10, 8],
                "notes": "Increasing weight with each set."
            }
        ],
        "workout_notes": ""
    },

    {
        "title": "Speed Things Up: Chest",
        "body_part": "chest",
        "exercises": [
            {
                "name": "Incline Bench Press",
                "reps": "50 total reps",
                "notes": "Use 75% of your bodyweight. Lighter if needed.",
            },
            {
                "name": "Flat Dumbbell Press",
                "reps": "50 total reps",
                "notes": "Use 50% of your max. Lighter if needed.",
            },
            {
                "name": "Decline Dumbbell Flyes",
                "reps": "50 total reps",
                "notes": "Use 50% of your max. Lighter if needed.",
            },
            {
                "name": "Cables Flyes",
                "reps": "50 total reps",
                "notes": "Use lighter weight and get targeted reps. As many sets as needed.",
            },
            {
                "name": "Pushups",
                "reps": "50 total reps",
                "notes": "You will be beat, so do the best you can. Knees if needed.",
            }
        ],
        "workout_notes": "---This workout is for time---"
    },
    {
        "title": "The Original",
        "body_part": "back",
        "exercises": [
            {
                "name": "Bent Over Barbell Rows",
                "reps": [15, 12, 10, 10, 10, 10],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Wide Grip Lat Pulldowns",
                "reps": [10, 10, 10],
                "sets": 3,
                "notes": "Begin with moderate weight and get 10, up it and get 10, up it once more and get a final 10 reps. Repeat for 3 total sets."
            },
            {
                "name": "Dumbbell One Arm Rows",
                "reps": [20, 20, 20],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Pull-Ups",
                "reps": "to failure",
                "sets": 3,
                "notes": "Failure means you cannot physically lift yourself over the bar again.",
            },
            {
                "name": "Seated Cable Rows",
                "reps": [10, 10],
                "sets": 3,
                "notes": "Begin with moderate weight and get 10, up it and get another 10 reps. Repeat for 3 total sets."
            },
            {
                "name": "Barbell Deadlifts w/ Body Weight",
                "reps": "50 total reps",
                "notes": "Use your body weight for total weight on this exercise. Take as many sets as needed to get the targeted reps."
            }
        ],
        "workout_notes": ""
    },

    {
        "title": "Slap in the Face",
        "body_part": "back",
        "exercises": [
            {
                "name": "Barbell Deadlifts w/ Body Weight",
                "reps": "100 total reps",
                "notes": "Use your body weight for total weight on this exercise. Take as many sets as needed to get the targeted reps."
            },
            {
                "name": "Hammer Strength High Rows",
                "reps": [12, 10, 8, 6, 6],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Wide Grip Cable Rows",
                "reps": [20, 20, 20, 20],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "High Pulley Rope Pulls",
                "reps": [20, 20, 20, 20],
                "notes": "Increasing weight with each set. Use rope attachment and set to highest position on cable pulley. Sit on the ground and pull the rope towards your face and outward.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Get Wide",
        "body_part": "back",
        "exercises": [
            {
                "name": "Wide Grip Lat Pulldowns",
                "reps": [20, 15, 12, 10, 8, 6, 8, 10, 12, 15, 20],
                "notes": "Increasing weight with each set until 6 reps. then back up with weight. Limited on the way back up."
            },
            {
                "name": "One Arm Cable Rows",
                "reps": [12, 12, 12, 12],
                "notes": "Increasing weight with each set. Start heavy, go heavier.",
            },
            {
                "name": "Straight Bar Pulldowns",
                "reps": [12, 12, 12, 12],
                "notes": "Increasing weight with each set. Start heavy, go heavier. Keep chest up and squeeze lats.",
            },
            {
                "name": "Dumbbell One Arm Rows",
                "reps": [12, 10, 8, 6, 4],
                "notes": "Increasing weight with each set. Perform these traditionally going to max."
            },
            {
                "name": "Wide Grip Pull-Ups",
                "reps": "20 total reps.",
                "notes": "Perform reps with good form and do not leave the gym until you complete all reps."
            }
        ],
        "workout_notes": ""
    },

    {
        "title": "Get Dense",
        "body_part": "back",
        "exercises": [
            {
                "name": "Barbell Deadlifts",
                "reps": [15, 12, 10, 8, 6, 4],
                "notes": "Increasing weight with each set. Perform these traditionally going to max."
            },
            {
                "name": "V-Bar Lat Pulldowns",
                "reps": [20, 20, 20, 20],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Reverse Pec Deck",
                "reps": [20, 20, 20, 20],
                "notes": "Increasing weight with each set. Normally for rear delts, but not as we will perform it. Keep chest up and squeeze rhomboids, release and stop half way back, repeat. Do not do full range on these, we are trying to isolate the rhomboids/mid back.",
            },
            {
                "name": "Incline Bench Dumbbell Rows",
                "reps": [12, 10, 8, 6],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Bent Over Reverse Cable Crossovers",
                "reps": "100 total reps",
                "notes": "Use a moderate weight and feel the burn in the mid back! As many sets to finish."
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Wings",
        "body_part": "back",
        "exercises": [
            {
                "name": "Dumbbell Deadlifts",
                "reps": [20, 20, 20, 20],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Chin-Ups",
                "reps": "to failure",
                "sets": 4,
                "notes": "As many reps as possible for each set.",
            },
            {
                "name": "Hammer Strength Seated Rows",
                "reps": [10, 10, 10],
                "sets": 3,
                "notes": "Begin heavy and drop weight twice. Total of 30 reps for each set. Repeat 3 times."
            },
            {
                "name": "Reverse Grip Lat Pulldowns",
                "reps": [20, 10, 15, 8, 20],
                "notes": "First set lighter for 20, next set heavy for 10, next set moderate for 15, next set heaviest for 8, last set same as first for 20. Different style, but effective for muscle confusion."
            },
            {
                "name": "Reverse Grip Bent Over Barbell Rows",
                "reps": "50 reps",
                "notes": "Moderate to heavy weight for 50 total reps. As many sets as it takes."
            }
        ],
        "workout_notes": ""
    },

    {
        "title": "Easy on Paper",
        "body_part": "back",
        "exercises": [
            {
                "name": "Barbell Deadlifts",
                "reps": "50 total reps",
                "notes": "Moderate weight for a total of 50 reps. As many sets as it takes.",
            },
            {
                "name": "Pull-Ups",
                "reps": "Each set to failure",
                "notes": "However many sets it took you to get to 50 reps in the previous exercise is how many sets to failure you need for this.",
            },
            {
                "name": "One Arm Dumbbell Rows",
                "reps": [12, 10, 8, 6],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Bent Over Barbell Rows",
                "reps": "50 total reps",
                "notes": "Moderate weight for a total of 50 reps. As many sets as it takes.",
            },
            {
                "name": "Chin-Ups",
                "reps": "Each set to failure",
                "notes": "However many sets it took you to get to 50 reps in the previous exercise is how many sets to failure you need for this.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Tradition with a Twist",
        "body_part": "back",
        "exercises": [
            {
                "name": "Wide Grip Lat Pulldowns",
                "reps": [15, 12, 10, 8, 6],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "One Arm Dumbbell Rows",
                "reps": [15, 12, 10, 8, 6],
                "notes": "Increasing weight with each set. This time around, rotate grip completely open so your pulling with knuckles facing forward instead of facing your body. This hits the lower lat."
            },
            {
                "name": "Barbell Bent Over Rows",
                "reps": [15, 12, 10, 8],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Wide Grip Cable Rows",
                "reps": [20, 20, 20, 20],
                "notes": "Increasing weight with each set. This will be tough to do, but no one said this was easy.",
            },
            {
                "name": "Barbell Deadlifts",
                "reps": "50 total reps",
                "notes": "Increasing weight with each set. Here is the twist. You can take as many sets as needed to finish the 50 total reps. However, after each set you must increase the weight 20-25%. Start moderate, but this will get very tough, very quickly."
            }
        ],
        "workout_notes": ""
    },

    {
        "title": "Back Burner",
        "body_part": "back",
        "exercises": [
            {
                "name": "Reverse Grip Lat Pulldowns",
                "reps": [15, 15, 15, 15],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "V-Bar Cable Rows",
                "reps": [15, 15, 15, 15],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "High Pulley Rope Pulls",
                "reps": [15, 15, 15, 15],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Dumbbell Rows (Pyramid)",
                "reps": [10, 10, 10, 10, 10],
                "notes": "Start with a light weight and get 10, increase to moderate weight get 10, go heavy get 10, then go back down. Repeat 3 times."
            },
            {
                "name": "Hammer Strength Rows",
                "reps": "50 total reps",
                "notes": "Moderate weight for 50 total reps. As many sets as it takes."
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "The V",
        "body_part": "back",
        "exercises": [
            {
                "name": "Dumbbell Pullovers",
                "reps": [15, 12, 10, 8, 6],
                "notes": "Increasing weight with each set. Normally done for chest, but with an extra emphasis on squeezing and pulling from the lats, these are great for the lat/serratus."
            },
            {
                "name": "Reverse Grip Bent Over Barbell Rows",
                "reps": [15, 15, 15, 15],
                "notes": "Maintain a moderate weight throughout. We are emphasizing the v-taper during this workout, so for each rep hold for a 3 count at the top of the movement and really squeeze the lats.",
            },
            {
                "name": "Wide Grip Cable Rows",
                "reps": [15, 15, 15, 15],
                "notes": "Maintain a moderate weight throughout. We are emphasizing the v-taper during this workout, so for each rep hold for a 3 count at the top of the movement and really squeeze the lats.",
            },
            {
                "name": "V-Bar Lat Pulldowns (Negatives)",
                "reps": [10, 10, 10, 10],
                "notes": "Go heavy and heavier on these. Use a spot if possible and have them help you bring the weight down. Your focus is to fight it all the way back up, concentrating on the negative."
            },
            {
                "name": "Assisted Pull-Ups",
                "reps": "100 total reps",
                "notes": "Most gyms have the assisted pull-up machines. These can really kick your ass if you do them at the right time of your workout. We are doing them at the end. Pick a moderate assisted weight and go for 100 total reps. As many sets as it takes."
            }
        ],
        "workout_notes": ""
    },

    {
        "title": "Speed Things Up: Back",
        "body_part": "back",
        "exercises": [
            {
                "name": "Barbell Deadlifts",
                "reps": "50 total reps",
                "notes": "Use 75% of your bodyweight. Lighter if needed."
            },
            {
                "name": "Bent Over Bar Barbell Rows",
                "reps": "50 total reps",
                "notes": "Use 50% of your max. Lighter if needed."
            },
            {
                "name": "Lat Pulldowns",
                "reps": "50 total reps",
                "notes": "Use 50% of your max. Lighter if needed."
            },
            {
                "name": "Cable Rows",
                "reps": "50 total reps",
                "notes": "Use lighter weight and get targeted reps. As many sets as needed."
            },
            {
                "name": "Pull-Ups",
                "reps": "50 total reps",
                "notes": "You will be beat, so do the best you can. Assisted if needed."
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Gun Show",
        "body_part": "arms",
        "exercises": [
            {
                "name": "Alternating Dumbbell Curls (Pyramid)",
                "reps": [10, 10, 10, 10, 10],
                "sets": 3,
                "notes": "Choose a moderate weight and get 10 reps, go up 10lbs and get 10 reps, go up another 10lbs and get 10 reps. Now, head back down. Should be a total of 50 reps. Repeat for 3 total sets."
            },
            {
                "name": "Rope Pushdowns (Pyramid)",
                "reps": [10, 10, 10, 10, 10],
                "sets": 3,
                "notes": "Choose a moderate weight and get 10 reps, go up 10lbs and get 10 reps, go up another 10lbs and get 10 reps. Now, head back down. Should be a total of 50 reps. Repeat for 3 total sets."
            },
            {
                "name": "Skull Crushers",
                "reps": [10, 10, 10, 10],
                "notes": "Increasing weight with each set. Start heavy and go heavier! If you have to pause mid set, thats ok but you must finish reps. Repeat for 4 total sets.",
            },
            {
                "name": "EZ Bar Curls",
                "reps": [10, 10, 10, 10],
                "notes": "Increasing weight with each set. Start heavy and go heavier! If you have to pause mid set, thats ok but you must finish reps. Repeat for 4 total sets.",
            },
            {
                "name": "Seated Dumbbell Hammer Curls",
                "reps": [10, 10, 10],
                "notes": "Increasing weight with each set. Go heavy for 3 total sets.",
            },
            {
                "name": "Seated Straight Bar Curls",
                "reps": [20, 20, 20],
                "notes": "Use a lighter weight and go for 20 reps. Sit with back arched. Keep elbows forward and do not move them once you begin. Focus on the squeeze of the movement.",
            },
            {
                "name": "One Arm Triceps Kickbacks",
                "reps": [10, 10, 10],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Overhead Dumbbell Extensions",
                "reps": [20, 20, 20],
                "notes": "Use a lighter weight and go for 20 reps.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Armed and Ready",
        "body_part": "arms",
        "exercises": [
            {
                "name": "EZ Bar Preacher Curls",
                "reps": [10, 10, 10, 10, 10, 10],
                "notes": "Use a weight 75% of max and really isolate the biceps. Focus completely on the squeeze. Hold each rep at the top for a 3 count, squeeze the entire time. Repeat for 6 total sets."
            },
            {
                "name": "Reverse Grip Triceps Pulldowns",
                "reps": [10, 10, 10, 10, 10, 10],
                "notes": "Same format as above to isolate triceps and get a good squeeze. Repeat for 6 total sets."
            },
            {
                "name": "Straight Bar 21's",
                "reps": [21, 21, 21],
                "notes": "Standard 21's format. 7 low, 7 high and 7 full range. Increasing weight with each set.",
            },
            {
                "name": "Dips",
                "reps": "to failure",
                "sets": 3,
                "notes": "Do not stop before failure. Focus on squeezing with the triceps, not chest.",
            },
            {
                "name": "Alternating Dumbbell Curls",
                "reps": [10, 10, 10],
                "sets": 3,
                "notes": "Do these as a dropset. Start really heavy and drop only 5lbs each drop!",
            },
            {
                "name": "Decline Skull Crushers",
                "reps": [10, 10, 10],
                "sets": 3,
                "notes": "Do these as a dropset. Start really heavy and drop only 5lbs each drop!",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Mind-Muscle",
        "body_part": "arms",
        "exercises": [
            {
                "name": "Incline Dumbbell Curls",
                "reps": [20, 20, 20],
                "notes": "Moderate weight, focus on the squeeze of each rep!",
            },
            {
                "name": "One Arm Overhead Dumbbell Extensions",
                "reps": [20, 20, 20],
                "notes": "Moderate weight, focus on the squeeze of each rep!",
            },
            {
                "name": "Straight Bar Cable Curls",
                "reps": [20, 25, 30],
                "notes": "Throw tradition out the window. Increasing weight with each set and increasing reps!",
            },
            {
                "name": "One Arm Triceps Pushdowns",
                "reps": [12, 15, 20],
                "notes": "Throw tradition out the window. Increasing weight with each set and increasing reps!",
            },
            {
                "name": "Straight Bar Curls",
                "reps": "100 total reps",
                "notes": "Choose a weight you can normally get 12-15 reps with and use it all the way through. Get as many reps as you possibly can on each set. As many sets as it takes!"
            },
            {
                "name": "Skull Crushers",
                "reps": "100 total reps",
                "notes": "Choose a weight you can normally get 12-15 reps with and use it all the way through. Get as many reps as you possibly can on each set. As many sets as it takes!"
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "This Sucks",
        "body_part": "arms",
        "exercises": [
            {
                "name": "Alternating Dumbbell Hammer/Standard Curls (Pyramid)",
                "Giant Sets": 3,
                "notes": "Start with 10lbs and get 10 reps. Increase 10lbs and get reps all the way up to your max and back down. Alternate from standard curls to hammer curls every other set."
            },
            {
                "name": "Hammer Strength Seated Dips",
                "sets": 3,
                "reps": [10, 10, 10, 10],
                "notes": "Start heavy and drop weight 3 times. Total of 40 reps for 3 sets."
            },
            {
                "name": "High Pulley Cable Curls",
                "reps": [20, 20, 20],
                "notes": "Use a lighter weight and burn them out!",
            },
            {
                "name": "Rope Pushdowns",
                "reps": [20, 20, 20],
                "notes": "Use a lighter weight and burn them out!",
            },
            {
                "name": "Arnold Curls",
                "sets": 3,
                "reps": [15, 15],
                "notes": "Start moderate for 15 reps and drop 10 lbs for another 15. Repeat for 3 total sets."
            },
            {
                "name": "Weighted Dips",
                "sets": 3,
                "reps": [10, 20],
                "notes": "Begin using 50% of your bodyweight as extra weight on dips and get 10 reps. Drop weight and get another 20 reps. Repeat for 3 total sets."
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Sleeveless",
        "body_part": "arms",
        "exercises": [
            {
                "name": "Overhead Dumbbell Extensions",
                "reps": [10, 10, 10, 10],
                "sets": 4,
                "notes": "Start Heavy and drop 20lbs after each 10 reps. After each dropset, increase beginning weight by 5-10lbs. Repeat for 4 total sets."
            },
            {
                "name": "One Arm Dumbbell Preacher Curls",
                "reps": [20, 20, 20, 20],
                "notes": "Increasing weight with each set. If you have to stop mid set briefly that is fine, but we want the burn. Finish the sets!"
            },
            {
                "name": "EZ Bar Reverse Curls",
                "reps": [10, 10, 10, 10],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Straight Bar Cable Curls",
                "reps": [20, 20, 20, 20],
                "notes": "Lighter weight, rep em out! Slow controlled reps.",
            },
            {
                "name": "Straight Bar KickBacks",
                "reps": [10, 10, 10, 10],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Straight Bar Pushdowns",
                "reps": [20, 20, 20, 20],
                "notes": "Lighter weight, rep em out! Slow controlled reps.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Burn, Burn, Burn",
        "body_part": "arms",
        "exercises": [
            {
                "name": "EZ Bar Curls",
                "reps": [10, 20, 10],
                "sets": 3,
                "notes": "Get 10 heavy reps then cut the weight in half and get 20 reps. Finally put the weight back on, yes the same weight you started with, and finish with 10 reps. 3 Sets."
            },
            {
                "name": "Incline Skull Crushers",
                "reps": [10, 20, 10],
                "sets": 3,
                "notes": "Get 10 heavy reps then cut the weight in half and get 20 reps. Finally put the weight back on, yes the same weight you started with, and finish with 10 reps. 3 Sets."
            },
            {
                "name": "Concentration Curls",
                "reps": "100 total reps",
                "notes": "Moderate weight for 100 total reps. As many sets as it takes.",
            },
            {
                "name": "Rope Pushdowns",
                "reps": "100 total reps",
                "notes": "Moderate weight for 100 total reps. As many sets as it takes.",
            },
            {
                "name": "Straight Bar Wall Curls",
                "reps": [10, 10, 10, 10],
                "notes": "Increasing weight with each set and focusing on strict form always!",
            },
            {
                "name": "Weighted Bench Dips",
                "reps": [20, 20],
                "sets": 4,
                "notes": "Sit weight on your lap and do dips between two benches. Toss the weight after the first 20 and keep going for another 20 reps. Repeat 4 times."
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Partner Up",
        "body_part": "arms",
        "exercises": [
            {
                "name": "Standing EZ Bar Preacher Curls",
                "reps": [12, 12, 12, 12],
                "notes": "Start with full range reps for 12. Next 12 have your partner pull down while you resist for 12 reps. Next 12 have your partner keep you down while you pull up for 12 reps. Final 12 are negatives."
            },
            {
                "name": "Overhead Dumbbell Extensions",
                "reps": [10, 10, 10, 10],
                "notes": "Start heavy and go heavier. Use a partner to get forced reps."
            },
            {
                "name": "Straight Bar Buddy Curls",
                "reps": "1-10 and back down 10-1",
                "sets": 3,
                "notes": "Go back and forth up to 10 reps, then back down to 1 rep. Use a heavy weight. 3 sets."
            },
            {
                "name": "Buddy Skull Crushers",
                "reps": "20-1",
                "sets": 2,
                "notes": "Use a moderate-heavy weight and get 20 reps. Go back and forth with your partner all the way down to 1 rep. No rest."
            },
            {
                "name": "Lying Cable Curls",
                "reps": [20, 20, 20],
                "notes": "Lay with back down and get 20 reps. Moderate weight. Have one person doing these and the other doing the pulldowns. Keep alternating for 3 total sets. No rest in between these sets.",
            },
            {
                "name": "Reverse Grip Triceps Pulldowns",
                "reps": [20, 20, 20],
                "notes": "Focus on the squeeze. Have one person doing these and the other doing the curls. Keep alternating for 3 total sets. No rest in between these sets.",
            }
        ],
        "workout_notes": "Workout is to be done with a workout partner."
    },
    {
        "title": "Giant Growth",
        "body_part": "arms",
        "exercises": [
            {
                "name": "Lying Dumbbell Triceps Extensions",
                "reps": [15, 15, 15, 15],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Close Grip Bench Press",
                "reps": [20, 20, 20, 20],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Reverse Grip Preacher Curls",
                "reps": [15, 15, 15, 15],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "One Arm Dumbbell Preacher Curls",
                "reps": [10, 10, 10, 10],
                "notes": "Increasing weight with each set. Hold the squeeze for a 3 count at the top of each rep.",
            },
            {
                "name": "Cable Kickbacks",
                "reps": [30, 20, 10, 10],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Decline Skull Crushers w/ Press",
                "reps": [10, 20],
                "sets": 4,
                "notes": "Increasing weight with each set. Get 10 reps of skull crushers, then 20 presses from the chest. Repeat for 4 total sets.",
            },
            {
                "name": "Alternating Dumbbell Hammer Curls",
                "reps": [15, 12, 10, 8],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Rope Curls",
                "reps": [10, 20],
                "sets": 4,
                "notes": "Do these as a dropset. Start with 10 reps heavy and drop to a lighter weight for 20 additional reps. Repeat for 4 total sets.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Speed Things Up: Arms",
        "body_part": "arms",
        "exercises": [
            {
                "name": "Straight Bar Curls",
                "reps": "50 total reps",
                "notes": "Use 75% of your max. Lighter if needed.",
            },
            {
                "name": "EZ Bar Curls",
                "reps": "75 total reps",
                "notes": "Use 50% of your max. Lighter if needed.",
            },
            {
                "name": "Reverse Curls",
                "reps": "75 total reps",
                "notes": "Use 50% of your max. Lighter if needed.",
            },
            {
                "name": "Skull Crushers",
                "reps": "50 total reps",
                "notes": "Use 75% of your max. Lighter if needed.",
            },
            {
                "name": "Overhead Dumbbell Extensions",
                "reps": "75 total reps",
                "notes": "Use 50% of your max. Lighter if needed.",
            },
            {
                "name": "Reverse Grip Bench Press",
                "reps": "75 total reps",
                "notes": "Use 50% of your max. Lighter if needed.",
            }
        ],
        "workout_notes": "---This workout is for time---"
    },
    {
        "title": "BILT",
        "body_part": "legs",
        "exercises": [
            {
                "name": "Barbell Squats",
                "reps": [20, 15, 12, 10, 10, 10, 10],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Dumbbell Lunges",
                "reps": [15, 15, 15],
                "notes": "To be done 15 reps on each leg for a total of 3 sets.",
            },
            {
                "name": "Stiff Leg Deadlifts",
                "reps": [10, 10, 10],
                "notes": "Increasing weight with each set. Go heavy on these.",
            },
            {
                "name": "Leg Extensions",
                "reps": [12, 12, 12],
                "notes": "Increasing weight with each set. Hold each rep and squeeze at the top.",
            },
            {
                "name": "Seated Leg Curls",
                "reps": [12, 12, 12],
                "notes": "Increasing weight with each set. Work the negative on these.",
            },
            {
                "name": "Leg Press",
                "reps": "75 total reps",
                "notes": "Use a moderate weight and take as many sets as needed to complete total reps."
            }
        ],
        "workout_notes": ""
    },

    {
        "title": "Squats!",
        "body_part": "legs",
        "exercises": [
            {
                "name": "Barbell Squats",
                "reps": "100 total reps",
                "notes": "Use a moderate to heavy weight and take as many sets as needed to reach total reps."
            },
            {
                "name": "Hack Squats",
                "reps": [20, 20, 20, 20],
                "notes": "Use a lighter weight and feel the burn on these!"
            },
            {
                "name": "Leg Extensions",
                "reps": [20, 20, 20],
                "notes": "Use a lighter weight and squeeze each rep.",
            },
            {
                "name": "Lying Leg Curls",
                "reps": [20, 20, 20],
                "notes": "Use a lighter weight and squeeze each rep.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "The Athlete",
        "body_part": "legs",
        "exercises": [
            {
                "name": "Leg Extensions",
                "reps": [20, 20, 20, 20],
                "notes": "Increasing weight with each set. Get a good burn and pre-exhaust the quads.",
            },
            {
                "name": "Dumbbell Walking Lunges",
                "reps": [20, 20, 20, 20],
                "notes": "Use a moderate weight and get 20 reps on each leg for 4 total sets.",
            },
            {
                "name": "Box Jumps",
                "reps": [15, 15, 15, 15],
                "notes": "Use a moderate to high box and really explode when you jump up.",
            },
            {
                "name": "Sled Pulls",
                "reps": "to failure",
                "sets": 3,
                "notes": "Most gyms have sleds now a days or at least a rope which you can attach some weight to. Pull as long as you can for 3 sets.",
                
            },
            {
                "name": "Barbell Jump Squats",
                "reps": [20, 20, 20],
                "notes": "Use a lighter weight and perform a squat, exploding from the bottom of the movement into a jump. Repeat for 3 total sets.",
            }
        ],
        "workout_notes": ""
    },

    {
        "title": "Tree Trunks",
        "body_part": "legs",
        "exercises": [
            {
                "name": "Barbell Sumo Squats",
                "reps": [20, 15, 12, 10, 10, 10],
                "notes": "Increasing weight with each set. Wide stance squats.",
            },
            {
                "name": "Leg Press",
                "reps": [10, 10, 10],
                "sets": 3,
                "notes": "Do these as a dropset. Start heavy and drop the weight twice. Repeat for 3 total sets.",
            },
            {
                "name": "Dumbbell Stiff Leg Deadlifts",
                "reps": [10, 10],
                "sets": 4,
                "notes": "Do these as a dropset. Start heavy and drop weight once. Repeat for 4 total sets.",
            },
            {
                "name": "Single-Leg Leg Extensions",
                "reps": [10, 10],
                "sets": 4,
                "notes": "Do these as a dropset. Squeeze each rep. Repeat for 4 total sets.",
            },
            {
                "name": "Squat Jumps",
                "reps": "50 total reps",
                "notes": "Think these are dumb? Try them at the end of a sick leg workout! Squat down and explode up, trying to jump as high as possible. Get 50 total reps.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "One at a Time",
        "body_part": "legs",
        "exercises": [
            {
                "name": "Barbell Squats",
                "reps": [15, 12, 10, 8, 6, 8, 10, 12, 15],
                "notes": "Increasing weight with each set until 6 reps, then back down in weight in same fashion.",
            },
            {
                "name": "Single-Leg Hack Squats",
                "reps": [12, 12, 12, 12],
                "notes": "Increasing weight with each set. Go lighter at first to get a feel for the movement.",
            },
            {
                "name": "Single-Leg Leg Press",
                "reps": [15, 15],
                "sets": 4,
                "notes": "Do these as a dropset, one leg at a time. Start heavier and drop weight once. Repeat for 4 total sets.",
            },
            {
                "name": "Single-Leg Leg Extensions",
                "reps": [20, 20, 20],
                "notes": "Increasing weight with each set. 20 reps per leg. Hold and squeeze at the top.",
            },
            {
                "name": "Single-Leg Leg Curls",
                "reps": [20, 20, 20],
                "notes": "Increasing weight with each set. 20 reps per leg. Hold the negative on each rep.",
            }
        ],
        "workout_notes": ""
    },

    {
        "title": "Growing Pains",
        "body_part": "legs",
        "exercises": [
            {
                "name": "Leg Press",
                "reps": [15, 12, 10, 8, 6, 8, 10, 12, 15],
                "notes": "Increasing weight with each set until 6 reps, then back down in weight in same fashion.",
            },
            {
                "name": "Dumbbell Bulgarian Split Squats",
                "reps": [15, 15, 15, 15],
                "notes": "Increasing weight with each set. 15 reps per leg. Repeat for 4 total sets.",
            },
            {
                "name": "Lying Hamstring Curls",
                "reps": [20, 15, 12, 10],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Barbell Squats",
                "reps": "75 total reps",
                "notes": "Use 50% of your max and get 75 total reps. As many sets as needed.",
            },
            {
                "name": "Box Jumps",
                "reps": "sets of 15",
                "notes": "However many sets it took you in the previous exercise is how many sets of this you need to do.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Afterburner",
        "body_part": "legs",
        "exercises": [
            {
                "name": "Front Squats",
                "reps": [15, 12, 10, 8, 8],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Leg Press",
                "reps": [20, 20, 20, 20, 20],
                "notes": "Moderate weight to start and increase with each set.",
            },
            {
                "name": "Stationary Lunges",
                "reps": [40, 40, 40, 40, 40],
                "notes": "No weight. 40 reps on each leg. Repeat for 5 total sets.",
            },
            {
                "name": "Single-Leg Stiff Leg Deadlifts",
                "reps": [12, 12, 12, 12],
                "notes": "Increasing weight with each set. Use dumbbells and get 12 reps on each leg for 4 sets."
            },
            {
                "name": "Leg Extensions",
                "reps": [10, 10, 10, 10],
                "sets": 4,
                "notes": "Do these as a dropset. Start heavy and drop weight 3 times. Get 40 reps total for 4 sets."
            }
        ],
        "workout_notes": ""
    },

    {
        "title": "XPlode",
        "body_part": "legs",
        "exercises": [
            {
                "name": "Box Squats",
                "reps": [12, 10, 8, 8, 8, 8],
                "notes": "Increasing weight with each set. Set up a box and squat down, pausing on the box briefly, then back up. Make sure box is low enough to go at least parallel or below."
            },
            {
                "name": "Barbell Lunges",
                "reps": [10, 10, 10, 10],
                "notes": "Increasing weight with each set. Do these stationary, alternating legs. Get 10 reps on each leg for 4 total sets."
            },
            {
                "name": "Close Footed Leg Press",
                "reps": [25, 25, 25, 25],
                "notes": "Increasing weight with each set. Keep feet close and work the outer quad. These burn!",
            },
            {
                "name": "Dumbbell Squat Jumps",
                "reps": [15, 15, 15, 15],
                "notes": "Use lighter dumbbells and keep them at your side. Squat down, explode up and jump.",
            },
            {
                "name": "Seated Leg Curls",
                "reps": [12, 10, 8],
                "notes": "Increasing weight with each set. Go heavy.",
            },
            {
                "name": "Leg Extensions",
                "reps": [12, 10, 8],
                "notes": "Increasing weight with each set. Go heavy.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Game On",
        "body_part": "legs",
        "exercises": [
            {
                "name": "Leg Extensions",
                "reps": [20, 20, 20, 20],
                "notes": "Increasing weight with each set. 2 second pause at top of each rep.",
            },
            {
                "name": "Smith Machine Squats",
                "reps": [10, 10, 10],
                "sets": 4,
                "notes": "Do these as a dropset. Start heavy and drop weight twice. First set feet wide, second set feet close, third set feet shoulder width. Repeat for 4 total sets.",
            },
            {
                "name": "Plie Squat",
                "reps": [15, 15, 15, 15],
                "notes": "Increasing weight with each set. Wide stance, holding dumbbell between legs and squat down. Focus on squeezing quads/glutes on the way up. Go heavy on these.",
            },
            {
                "name": "Dumbbell Leg Curls",
                "reps": [15, 15, 15, 15],
                "notes": "Hold Dumbbell between feet and perform leg curl while lying face down on a flat bench.",
            },
            {
                "name": "Stiff Leg Deadlifts",
                "reps": "50 total reps",
                "notes": "Use a moderate weight and get 50 total reps. As many sets as it takes.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Speed Things Up: Legs",
        "body_part": "legs",
        "exercises": [
            {
                "name": "Barbell Squats",
                "reps": "50 total reps",
                "notes": "Use 75% of your bodyweight. Lighter if needed.",
            },
            {
                "name": "Leg Press",
                "reps": "50 total reps",
                "notes": "Use 75% of your max. Lighter if needed.",
            },
            {
                "name": "Stiff Leg Deadlifts",
                "reps": "50 total reps",
                "notes": "Use 50% of your max. Lighter if needed.",
            },
            {
                "name": "Leg Extensions",
                "reps": "50 total reps",
                "notes": "Use lighter weight and get targeted reps. As many sets as needed.",
            },
            {
                "name": "Leg Curls",
                "reps": "50 total reps",
                "notes": "Use lighter weight and get targeted reps. As many sets as needed.",
            }
        ],
        "workout_notes": "This workout is for time."
    },
    {
        "title": "Get Some",
        "body_part": "shoulders",
        "exercises": [
            {
                "name": "Dumbbell Shoulder Press",
                "reps": [20, 15, 12, 10, 8],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Barbell Upright Rows",
                "reps": [15, 15, 15, 15],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Dumbbell Lateral Raises (Pyramid)",
                "reps": [10, 10, 10, 10, 10],
                "sets": 3,
                "notes": "Start lighter and get 10 reps. Increase weight 10lbs for another 10 reps. Increase weight again 10lbs and get another 10 reps, then head back down. Total of 50 reps for 3 sets.",
            },
            {
                "name": "Seated Rear Dumbbell Lateral Raises",
                "reps": [15, 12, 10, 8],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Seated Front Raises",
                "reps": [15, 12, 10, 8],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Smith Machine Shoulder Press",
                "reps": "2:00 minutes",
                "sets": 3,
                "notes": "Use moderate weight and rep these out for 2 minutes straight. Pause briefly if needed, but try and go as long and as hard as possible. Repeat for 3 total sets."
            }

        ],
        "workout_notes": ""
    },
    {
        "title": "It's Not Over",
        "body_part": "shoulders",
        "exercises": [
            {
                "name": "Hammer Strength Shoulder Press",
                "reps": [20, 20, 20, 20],
                "notes": "Increasing weight with each set. You should finish with a heavy weight, pause if needed.",
            },
            {
                "name": "Barbell Front Raises",
                "reps": [10, 10, 10],
                "sets": 3,
                "notes": "Do these as a dropset. Drop weight two times for a total of 30 reps. Repeat for 3 sets.",
            },
            {
                "name": "Plate Front Raises",
                "reps": [15, 15, 15],
                "notes": "Grab a 25, 35 or 45lb plate and rep out 15 reps for 3 total sets.",
            },
            {
                "name": "Dumbbell Snatch",
                "reps": [12, 12, 12, 12],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Cable Lateral Raises",
                "reps": [20, 20, 20, 20],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Barbell Upright Rows",
                "reps": "100 total reps",
                "notes": "Use a moderate weight and keep momentum up throughout movement. As many sets as needed to reach 100 total reps.",
            }],
        "workout_notes": ""
    },
    {
        "title": "Rock Solid",
        "body_part": "shoulders",
        "exercises": [
            {
                "name": "Dumbbell Lateral Raises",
                "reps": [20, 20, 20, 20],
                "notes": "Do these with a lighter weight and get a 5 count on the way up and down for each rep."
            },
            {
                "name": "Barbell Shoulder Press",
                "reps": [15, 12, 10, 8, 6, 8, 10, 12, 15],
                "notes": "Increasing weight with each set until 6 reps, then back down in weight."
            },
            {
                "name": "Kettle Bell Shoulder Swings",
                "reps": [15, 15, 15, 15],
                "notes": "Do these with a moderate weight.",
            },
            {
                "name": "Straight Bar Cable Front Raises",
                "reps": [20, 20, 20, 20],
                "notes": "Do these with a moderate weight.",
            },
            {
                "name": "Reverse Pec Deck",
                "reps": [12, 10, 8],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Rear Delt Cable Crossovers",
                "reps": [10, 15, 20],
                "notes": "Increasing weight AND increasing reps! Start moderate and challenge yourself.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Beast Mode",
        "body_part": "shoulders",
        "exercises": [
            {
                "name": "Barbell Shoulder Press",
                "reps": "100 total reps",
                "notes": "Use a moderate weight which you normal can get 12-15 reps. Take as many sets as needed to get the 100 total reps."
            },
            {
                "name": "Incline Bench Dumbbell Rear Flyes",
                "reps": [15, 12, 10, 8],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "One Arm Rear Cable Flyes",
                "reps": [20, 20, 20, 20],
                "notes": "Use a moderate weight for this exercise.",
            },
            {
                "name": "Dumbbell Lateral Raises",
                "reps": [12, 12],
                "sets": 4,
                "notes": "Do these as a dropset. Increasing weight with each dropset. Repeat for 4 total sets."
            },
            {
                "name": "Alternating Dumbbell Front Raises",
                "reps": [10, 10, 10],
                "notes": "Increasing weight with each set. 10 reps on each arm for 3 total sets.",
            },
            {
                "name": "Barbell Front Raises",
                "reps": [10, 10],
                "sets": 3,
                "notes": "Do these as a dropset. 20 reps per dropset for 3 total sets.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "You vs. You",
        "body_part": "shoulders",
        "exercises": [
            {
                "name": "Barbell Clean and Press",
                "reps": "75 total reps",
                "notes": "Use a moderate weight. As many sets as needed to get the 75 total reps."
            },
            {
                "name": "Barbell Rear Delt Rows",
                "reps": [15, 12, 10, 8],
                "notes": "Increasing weight with each set. Grip the bar very wide and perform a bent over row. Be sure to pull bar up and utilize your rear delts. Do not do these as you would for back.",
            },
            {
                "name": "Dumbbell Upright Rows",
                "reps": [15, 12, 10, 8],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Dumbbell Lateral Raises",
                "reps": [40, 40, 40, 40],
                "notes": "Use a lighter weight and get the targeted reps. Pause if needed, but do not drop weight.",
            },
            {
                "name": "Machine Shoulder Press",
                "reps": [10, 10, 10, 10],
                "notes": "Go heavy on these.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Super Human",
        "body_part": "shoulders",
        "exercises": [
            {
                "name": "Dumbbell Arnold Press",
                "reps": [15, 12, 10, 8, 6, 8, 10, 12, 15],
                "notes": "Increasing weight with each set until 6 reps then back down in weight."
            },
            {
                "name": "Cable Upright Rows",
                "reps": [20, 20, 20],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Cable Lateral Raises",
                "reps": [20, 20, 20],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Alternating Kettle Bell Press",
                "reps": [15, 15, 15],
                "notes": "Use a moderate weight. 15 reps with each arm for 3 total sets.",
            },
            {
                "name": "Dumbbell Snatch",
                "reps": [10, 10, 10],
                "notes": "Use a heavier weight for this exercise.",
            },
            {
                "name": "Dumbbell Front Raises",
                "reps": [10, 10, 10],
                "sets": 4,
                "notes": "Do these as a dropset. Start heavier and drop weight twice. Get 30 total reps for 4 sets."
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Pre-Exhaust",
        "body_part": "shoulders",
        "exercises": [
            {
                "name": "Dumbbell Lateral Raises",
                "reps": [20, 20, 20],
                "notes": "Moderate weight, burn em out."
            },
            {
                "name": "Dumbbell Front Raises",
                "reps": [20, 20, 20],
                "notes": "Moderate weight, burn em out."
            },
            {
                "name": "Dumbbell Rear Lateral Raises",
                "reps": [20, 20, 20],
                "notes": "Moderate weight, burn em out."
            },
            {
                "name": "Barbell Shoulder Press",
                "reps": [12, 10, 8, 6, 6, 6],
                "notes": "Increasing weight with each set."
            },
            {
                "name": "Barbell Upright Rows",
                "reps": [15, 12, 10, 8, 6],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Plate Steering Wheels",
                "reps": "30 seconds",
                "sets": 5,
                "notes": "Hold a plate straight out in front of your body. Turn the plate like a steering wheel left and right for 30 seconds. Repeat for 5 total sets.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "$#%*",
        "body_part": "shoulders",
        "exercises": [
            {
                "name": "Barbell Shoulder Press",
                "reps": [15, 12, 10, 8, 6],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Dumbbell Lateral Raises",
                "reps": [15, 12, 10, 8, 6],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Plate Front Raises",
                "reps": [15, 15, 15, 15, 15],
                "notes": "Grab a 25, 35 or 45lb plate and rep out 15 reps for 5 total sets.",
            },
            {
                "name": "Hammer Strength Shoulder Press",
                "reps": "100 reps",
                "notes": "Use a moderate weight and take as many sets as needed to reach 100 total reps."
            },
            {
                "name": "Cable Front Raises",
                "reps": [12, 12, 12],
                "notes": "Increasing weight with each set.",
            },
            {
                "name": "Reverse Pec Deck",
                "reps": [10, 10, 10],
                "notes": "Increasing weight with each set.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Cannons",
        "body_part": "shoulders",
        "exercises": [
            {
                "name": "Dumbbell Shoulder Press",
                "reps": "100 total reps",
                "notes": "Use a moderate weight and take as many sets as needed to get 100 total reps."
            },
            {
                "name": "Dumbbell Front/Side Lateral Raises",
                "reps": [15, 15],
                "sets": 4,
                "notes": "Use a moderate weight and get 15 reps to the front, then immediately 15 more to the side."
            },
            {
                "name": "Barbell Upright Rows",
                "reps": [20, 20, 20, 20],
                "notes": "Increasing weight with each set. Start light and go to moderate.",
            },
            {
                "name": "Single Arm Machine Press",
                "reps": [12, 12, 12, 12],
                "notes": "Increasing weight with each set. Alternating arms.",
            },
            {
                "name": "Dumbbell Rear Lateral Raises",
                "reps": [12, 10, 8],
                "notes": "Increasing weight with each set. Go heavier on this exercise.",
            },
            {
                "name": "Static Plate Hold",
                "reps": "To failure",
                "sets": 3,
                "notes": "Hold a plate out in front of your body and hold for as long as possible.",
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Speed Things Up: Shoulders",
        "body_part": "shoulders",
        "exercises": [
            {
                "name": "Barbell Shoulder Press",
                "reps": "50 total reps",
                "notes": "Use 75% of your bodyweight. Lighter if needed."
            },
            {
                "name": "Barbell Upright Rows",
                "reps": "50 total reps",
                "notes": "Use 75% of your max. Lighter if needed."
            },
            {
                "name": "Dumbbell Arnold Press",
                "reps": "50 total reps",
                "notes": "Use 50% of your max. Lighter if needed."
            },
            {
                "name": "Dumbbell Lateral Raises",
                "reps": "60 total reps",
                "notes": "Use lighter weight and get targeted reps. As many sets as needed."
            },
            {
                "name": "Dumbbell Front Raises",
                "reps": "60 total reps",
                "notes": "Use lighter weight and get targeted reps. As many sets as needed."
            }
        ],
        "workout_notes": "---This workout is for time---"
    },
    {
        "title": "Calf Blast",
        "body_part": "extra",
        "exercises": [
            {
                "name": "Standing Calf Raises",
                "reps": [15, 12, 10, 8],
                "notes": "Increasing weight with each set. Go heavy!"
            },
            {
                "name": "Donkey Calf Raises",
                "reps": [30, 30, 30, 30],
                "notes": "Lighter weight and burn em out!"
            },
            {
                "name": "Seated Calf Raises",
                "reps": [12, 12, 12],
                "sets": 4,
                "notes": "Do these as a dropset. Drop weight twice for a total of 36 reps. Repeat for 4 total sets."
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Trap Blast",
        "body_part": "extra",
        "exercises": [
            {
                "name": "Barbell Shrugs",
                "reps": [20, 15, 12, 10, 8, 10, 12, 15, 20],
                "notes": "Increasing weight with each set until 8 reps, then back down in weight."
            },
            {
                "name": "Hammer Strength Shrugs",
                "reps": [15, 15],
                "sets": 4,
                "notes": "Do these as a dropset. Drop weight once for a total of 30 reps. Repeat for 4 total sets."
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Ab Blast - Burn",
        "body_part": "extra",
        "exercises": [
            {
                "name": "Hanging Leg Raises",
                "reps": [15, 15, 15],
                "notes": "Do these with limited rest. Hold stability ball between legs for more of a challenge."
            },
            {
                "name": "Bicycles",
                "reps": [30, 30, 30, 30],
                "notes": ""
            },
            {
                "name": "Knees Up Crunches",
                "reps": [30, 30, 30, 30],
                "notes": ""
            },
            {
                "name": "Legs Flat Crunches",
                "reps": [30, 30, 30, 30],
                "notes": ""
            },
            {
                "name": "Decline Bench Oblique Twists",
                "reps": "to failure",
                "sets": 4,
                "notes": ""
            }
        ],
        "workout_notes": ""
    },
    {
        "title": "Ab Blast - Weighted",
        "body_part": "extra",
        "exercises": [
            {
                "name": "Decline Bench Weighted Sit-Ups",
                "reps": [15, 15, 15],
                "notes": "Hold a lighter dumbbell behind head and perform sit ups."
            },
            {
                "name": "Rope Cable Crunches",
                "reps": [20, 20, 20, 20],
                "notes": ""
            },
            {
                "name": "Weighted Leg Raises",
                "reps": [15, 15, 15, 15],
                "notes": ""
            },
            {
                "name": "Medicine Ball Twists",
                "reps": [30, 30, 30],
                "notes": ""
            }
        ],
        "workout_notes": ""
    }
]

export default workouts;