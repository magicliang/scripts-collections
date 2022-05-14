        for key, value of params
            needToAppend = true
            pattern = /tags\[(\S+)\]/gi
            matches = pattern.exec(key)
            if matches and matches.length is 2
                tagName = matches[1]
                tag = {
                    key: tagName
                    value: value
                }
                tags.pushObject(tag)

            else
                newKey = queryParamsTable[key]
                if newKey is 'o'
                    if value is 'HistoryOnlyOfficial'
                        value = true
                    else if value is 'HistoryOnlyUnofficial'
                        value = false
                    else
                        needToAppend = false
                if newKey and needToAppend
                    paramString += "&#{newKey}=#{value}"
        if tags.length
            tagsString = JSON.stringify(tags)
            paramString = paramString + '&tags=' + encodeURI(tagsString)
        paramString 