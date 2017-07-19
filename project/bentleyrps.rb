
def choose
	puts "Let's play rock, paper, scissors!".downcase
	puts "Do you pick rock, paper, or scissors?".downcase
	user_choice = STDIN.gets.chomp
	comp = rand(3)
		if comp == 1
			comp_choice = "rock"
		elsif comp == 2
			comp_choice = "paper"
		else comp == 3 
			comp_choice = "scissors"
		end
	puts "Computer picked: ", comp_choice, "\n"
	puts "You picked: ", user_choice, "\n"
	# Our array of potential user choices
	potential_user_choices = ["rock", "paper", "scissors"]
	
	# Check to see if our user input is in our array of potential chocies
	if !potential_user_choices.include? user_choice

		# If it isn't, prompt the user to input a new value
		puts "Please try again."

	# If the user has input "quit", let them go
	elsif user_choice == "quit"
		puts "Goodbye!"
	
	else 

		# The user has put in a good value!
		if user_choice == "rock" && comp_choice == "rock"
			puts "It's a tie!"
		elsif user_choice == "rock" && comp_choice == "paper"
			puts "You lose."
		elsif user_choice == "rock" && comp_choice == "scissors"
			puts "You win!"
		elsif user_choice == "paper" && comp_choice == "rock"
			puts "You win!"
		elsif user_choice == "paper" && comp_choice == "paper"
			puts "It's a tie!"
		elsif user_choice == "paper" && comp_choice == "scissors"
		q	puts "You lose."
		elsif user_choice == "scissors" && comp_choice == "rock"
			puts "You lose."
		elsif user_choice == "scissors" && comp_choice == "paper"
			puts "You win!"
		elsif user_choice == "scissors" && comp_choice == "scissors"
			puts "It's a tie!"
		end
	end
end

