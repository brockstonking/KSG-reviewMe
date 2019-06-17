SELECT * FROM sent_messages sm
JOIN locations lo ON lo.location_id = sm.location_id
JOIN businesses bu ON bu.business_id = lo.business_id
where bu.business_id = $3 and year = $1 or year = $2;