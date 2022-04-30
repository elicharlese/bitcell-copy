def connect_zapier_automations():
    connection1()
    connection2()
    connection3()
#Create a log of the connections so that we can view it for later use
    connection_list = {connection1, connection2, connection3}
    return connection_list