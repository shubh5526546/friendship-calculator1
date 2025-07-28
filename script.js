function calculateFriendship() {
  const name1 = document.getElementById("name1").value.trim().toLowerCase();
  const name2 = document.getElementById("name2").value.trim().toLowerCase();
  const result = document.getElementById("result");

  // Level 1: 90–100%
  const level1 = [
    ["shubham", "archita"],
    ["archita", "shubham"],
    ["archita", "subham"],
    ["kajal", "archita"],
    ["yeobo", "candy"]
  ];

  // Level 2: 77–89%
  const level2 = [
    ["archita", "anshu"],
    ["sakshi", "archita"],
    ["shubham", "archita"],
    ["sakshi", "anshu"],
    ["archita", "jyoti"],
    ["archita", "joti"],
    ["anshu", "jyoti"],
    ["anshu", "joti"]
  ];

  // Level 3: 50–79%
  const level3 = [
    ["archita", "nandini"],
    ["shubham", "anshu"],
    ["nandini", "anshu"]
  ];

  // 🌟 Custom emojis for specific pairs
  const customEmojiPairs = {
    "shubham|archita": "💖💑",
    "yeobo|candy": "🍬",
    "archita|anshu": "👩🏼‍🤝‍👩🏻",
    "sakshi|anshu": "🔥",
    "archita|nandini": "🌺"
  };

  const defaultEmoji = "💫"; // For all others

  // Helper function
  function isPairMatch(n1, n2, list) {
    return list.some(pair =>
      pair.includes(n1) && pair.includes(n2)
    );
  }

  // Friendship percentage logic
  let percentage;
  if (isPairMatch(name1, name2, level1)) {
    percentage = Math.floor(Math.random() * 11) + 90; // 90–100%
  } else if (isPairMatch(name1, name2, level2)) {
    percentage = Math.floor(Math.random() * 13) + 77; // 77–89%
  } else if (isPairMatch(name1, name2, level3)) {
    percentage = Math.floor(Math.random() * 30) + 50; // 50–79%
  } else {
    percentage = Math.floor(Math.random() * 40) + 10; // 10–49%
  }

  // Select emoji for this pair
  const key = `${name1}|${name2}`;
  const reverseKey = `${name2}|${name1}`;
  const emoji = customEmojiPairs[key] || customEmojiPairs[reverseKey] || defaultEmoji;

  // Display result
  result.textContent = `Your Friendship Score is: ${percentage}% ${emoji}`;
}