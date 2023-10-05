//Sort A Stack Using Recursion

// Note that here predefined Stack class is used
// for stack operation

// Recursive Method to insert an item x in sorted way
function sortedInsert(s,x)
{
	// Base case: Either stack is empty or newly
		// inserted item is greater than top (more than all
		// existing)
		if (s.length==0 || x > s[s.length-1])
		{
			s.push(x);
			return;
		}

		// If top is greater, remove the top item and recur
		let temp = s.pop();
		sortedInsert(s, x);

		// Put back the top item removed earlier
		s.push(temp);
}

// Method to sort stack
function sortStack(s)
{
	// If stack is not empty
		if (s.length!=0)
		{
			// Remove the top item
			let x = s.pop();

			// Sort remaining stack
			sortStack(s);

			// Push the top item back in sorted stack
			sortedInsert(s, x);
		}
}

// Utility Method to print contents of stack
function printStack(s)
{
	for(let i=s.length-1;i>=0;i--)
	{
		document.write(s[i]+" ");
	}
	document.write("<br>")
}
	
