Feature: API Testing

    @method11
    Scenario: Perform delete operation
        Given I send a delete request
        Then The response status code of delete should be 204

    @method11
    Scenario: Perform Get operation
        Given I send a get request
        Then The response status code of get should be 200

    @method111
    Scenario: Perform post operation
        Given I send a post request with body
            """
            {
            "name": "Venkatesh",
            "job": "Test lead",
            "id":"45678"
            }
            """
        Then The response status code of post should be 201

    @method11
    Scenario: Perform put operation
        Given I send a put request with body
            """
            {
            "name": "Venkatesh",
            "job": "Senior Test Lead",
            "id":"45678"
            }
            """
        Then The response status code of put should be 200

    @method11
    Scenario: Perform patch operation
        Given I send a patch request with body
            """
            {
            "name": "Bhanu",
            "job": "Technical Manager",
            "id":"9009"
            }
            """
        Then The response status code of patch should be 200
