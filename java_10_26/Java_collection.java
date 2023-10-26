package java_10_26;

import com.sun.security.jgss.GSSUtil;
import java.util.*;

public class Java_collection {
    public static void main(String[] args) {
        List<String> linkedList=new LinkedList<>();
        linkedList.add("A");
        linkedList.add("B");
        linkedList.add(1,"C");
        System.out.println(linkedList);

        Set<String> hashSet=new HashSet<>();
        hashSet.add("A");
        hashSet.add("B");
        hashSet.add("B");
        System.out.println(hashSet);

        Set<String> linkedHashSet=new LinkedHashSet<>();
        linkedHashSet.add("A");
        linkedHashSet.add("C");
        linkedHashSet.add("B");
        linkedHashSet.add("B");        linkedHashSet.add("B");
        linkedHashSet.add("B");        linkedHashSet.add("B");
        linkedHashSet.add("B");
        System.out.println(linkedHashSet);

        Set<String> treeSet=new TreeSet<>();
        treeSet.add("A");
        treeSet.add("C");
        treeSet.add("B");
        treeSet.add("B");
        treeSet.add("B");
        treeSet.add("B");
        treeSet.add("B");
        treeSet.add("B");
        treeSet.add("B");
        treeSet.add("A");
        System.out.println(treeSet);


        Map<String, Integer > hashMap = new HashMap<>();
        hashMap.put("One",1);
        hashMap.put("Two",null);
        hashMap.put("Three",null);
        System.out.println(hashMap);

        Map<String, Integer> linkedMap=new LinkedHashMap<>();
        linkedMap.put("Three",3);
        linkedMap.put("One",1);
        linkedMap.put("Two",2);
        System.out.println(linkedMap);

        Map<String, Integer> treeMap=new TreeMap<>();
        treeMap.put("Three",3);
        treeMap.put("One",1);
        treeMap.put("Two",2);
        System.out.println(treeMap);
    }
}
