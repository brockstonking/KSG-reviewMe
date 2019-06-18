update sent_messages
set interaction_status = 'Opened'
where message_id = $1;