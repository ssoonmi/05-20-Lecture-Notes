SELECT 
users.full_name,
merchant_types.type,
countries.name,
merchants.merchant_name
FROM countries
JOIN merchants ON merchants.country_id = countries.id
JOIN users ON users.id = merchants.admin_id
JOIN merchant_types ON merchant_types.id = merchants.merchant_type_id
ORDER BY merchants.merchant_name;