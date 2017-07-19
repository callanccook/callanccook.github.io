
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
	# user_choice =  "rock" || "paper" || "scissors"
	if ["rock", "paper", "scissors"].include? user_choice 
		puts "You picked: ", user_choice, "\n"
	else 
		puts "Please try again."
	end
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
		puts "You lose."
	elsif user_choice == "scissors" && comp_choice == "rock"
		puts "You lose."
	elsif user_choice == "scissors" && comp_choice == "paper"
		puts "You win!"
	elsif user_choice == "scissors" && comp_choice == "scissors"
		puts "It's a tie!"
	end
end

choose




