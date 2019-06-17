SELECT * FROM sent_messages sm
JOIN locations lo ON lo.location_id = sm.location_id
JOIN businesses bu ON bu.business_id = lo.business_id
WHERE bu.business_id = $1
ORDER BY message_id DESC
LIMIT 10;