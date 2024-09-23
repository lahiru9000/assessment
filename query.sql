--question 2 task 1
SELECT 
Customers.CustomerName
SUM(Orders.OrderAmount)
FROM Customers
INNER JOIN Orders
ON Customers.CustomerID = Orders.CustomerID
GROUP BY Orders.CustomerID;


