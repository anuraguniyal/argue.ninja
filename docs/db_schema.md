- `root`
    - `forum`  Discussion alpha vs beta
        - `category` For future use. e.g. politics, sports, technology etc
        - `title` title of dicussion e.g. "What is the best mobile OS"
        - `timestamp_start` when it was posted UTC
        - `timestamp_end` when it ended UTC
        - `header_img_url` any background url for forum header
        - `alpha_opt` option alpha e.g. "Android"
        - `beta_opt` option beta e.g. "iOS"
        - `alpha_url` any url related to alpha opt (wikipedia link?)
        - `beta_url`  any url related to beta opt (wikipedia link?)
        - `alpha_img_url` any image for alpha opt
        - `beta_img_url`  any image for alpha opt
        - `alpha_votes` up-votes for alpha opt
        - `beta_votes` up-votes for beta opt

        - `messages` list of messages
            - `message-id`
                - `timestamp` when it was posted UTC
                - `text` text of the message
                - `alpha_vote` boolean users vote for alpha or beta
                - `user_id` user who posted the message
                - `user_display_name` ? should we store it instead of querying it everytime from users table?
            - ...//more messages

        - `votes` list of votes
            - `user-id`
                - `alpha_vote` boolean
                - `timestamp` not needed but could be good to track vote graph by time

    - `users` list of users
        - `user-id` user id generated by FireBase auth system, which is unique across providers
            - `joined_at` UTC timestamp when user joined
            - `display_name` these fields would depened if providers like facebook give it
            - `email`
            - `display_pic_url`
