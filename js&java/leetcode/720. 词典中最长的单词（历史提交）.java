class Solution {
  public String longestWord(String[] words) {
    Arrays.sort(words, (a, b)->a.length()!=b.length()?b.length()-a.length():a.compareTo(b));
    Set<String> wordSet = new HashSet<>(Arrays.asList(words));
    for (String word : words) {
      String t = word.substring(0, word.length() - 1);
      while (t.length() > 0) {
        if (wordSet.contains(t)) {
          t = t.substring(0, t.length() - 1);
        } else {
          break;
        }
      }
      if (t.equals("")) {
        return word;
      }
    }
    return "";
  }
}
