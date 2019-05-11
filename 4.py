def jollyRogers(arr):
	arrLength = len(arr)
	print(arrLength)
	for row in range(0, arrLength):
	    for column in range(0, arrLength):
	    	if column==row:
	        	print(arr[column], end=' ')
	    	elif arrLength-1-column==row:
	        	print(arr[row], end=' ')
	    	else:
	        	print("=", end=' ')
	    print("")

arr = ['P', 'R', 'O', 'G', 'R', 'A', 'M', 'M', 'E', 'R']
jollyRogers(arr)